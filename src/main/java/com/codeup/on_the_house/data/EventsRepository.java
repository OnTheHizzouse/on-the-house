package com.codeup.on_the_house.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepository extends JpaRepository <Event, Long> {

}
