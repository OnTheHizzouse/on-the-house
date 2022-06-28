package com.codeup.on_the_house.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostsRepository extends JpaRepository <Post, Long> {
    @Query("from Post a where a.itemName like %:itemName%")
    List<Post> findAllByItemNameContains(@Param("itemName") String itemName);

    List<Post> findAllByUserId(Long id);

}


