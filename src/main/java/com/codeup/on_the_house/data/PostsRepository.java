package com.codeup.on_the_house.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository <Post, Long> {

}
