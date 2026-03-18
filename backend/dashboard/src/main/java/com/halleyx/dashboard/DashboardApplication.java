package com.halleyx.dashboard;

import com.halleyx.dashboard.entity.CustomerOrder;
import com.halleyx.dashboard.repository.OrderRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DashboardApplication {

    public static void main(String[] args) {
        SpringApplication.run(DashboardApplication.class, args);
    }

    @Bean
    CommandLineRunner init(OrderRepository repo) {
        return args -> {

            repo.save(new CustomerOrder("deepak@gmail.com","Fiber 300",120));
            repo.save(new CustomerOrder("user1@gmail.com","5G Plan",90));
            repo.save(new CustomerOrder("user2@gmail.com","Fiber 1Gbps",60));

        };
    }

}