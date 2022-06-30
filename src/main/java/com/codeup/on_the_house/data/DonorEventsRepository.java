package com.codeup.on_the_house.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorEventsRepository extends JpaRepository <DonorEvent, Long> {

DonorEvent findById(long id);
}
