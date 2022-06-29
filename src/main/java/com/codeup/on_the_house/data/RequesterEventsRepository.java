package com.codeup.on_the_house.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RequesterEventsRepository extends JpaRepository<RequesterEvent, Long> {

    RequesterEvent findById(long id);
}
