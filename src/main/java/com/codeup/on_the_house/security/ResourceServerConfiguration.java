package com.codeup.on_the_house.security;

import com.codeup.on_the_house.errors.CustomAccessDeniedHandler;
import com.codeup.on_the_house.errors.CustomAuthenticationEntryPoint;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

    private final CustomAuthenticationEntryPoint customAuthenticationEntryPoint;

    public ResourceServerConfiguration(CustomAuthenticationEntryPoint customAuthenticationEntryPoint) {
        this.customAuthenticationEntryPoint = customAuthenticationEntryPoint;
    }

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId("api");
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .formLogin()
                .disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/api/users", "api/users/**")
                .hasAnyAuthority("ADMIN", "USER")
                .antMatchers("/api/posts", "api/posts/**")
                .hasAnyAuthority("ADMIN", "USER")
//                .antMatchers("/home")
//                .hasAnyAuthority("ADMIN", "USER")
//                .antMatchers("/profile")
//                .hasAnyAuthority("ADMIN", "USER")
//                .antMatchers("/events")
//                .hasAnyAuthority("ADMIN", "USER")
                .antMatchers("/swagger-ui/**", "/v3/api-docs/**")
                .permitAll()
                .antMatchers("/api/users/createUser")
                .permitAll()
                .antMatchers("/**")
                .permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(customAuthenticationEntryPoint)
                .accessDeniedHandler(new CustomAccessDeniedHandler());
    }
}
