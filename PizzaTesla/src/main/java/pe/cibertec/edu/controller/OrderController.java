package pe.cibertec.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pe.cibertec.edu.dto.OrderRequestDTO;
import pe.cibertec.edu.model.Order;
import pe.cibertec.edu.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {
	@Autowired
    private OrderService orderService;

    @GetMapping("/getOrders")
    public ResponseEntity<List<Order>> getOrders() {
        List<Order> orders = orderService.getOrders();
        return ResponseEntity.status(HttpStatus.OK).body(orders);
    }

    @GetMapping("/getOrderById/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);
        return ResponseEntity.status(HttpStatus.OK).body(order);
    }

    @PostMapping("/createOrder")
    public ResponseEntity<Order> createOrder(@RequestBody OrderRequestDTO orderRequest) {
        Order createdOrder = orderService.createOrder(orderRequest.getOrder(), orderRequest.getOrderItems());
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
    }

    @GetMapping("/getByUser/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable Long userId) {
        List<Order> orders = orderService.getOrdersByUserId(userId);
        // Handle the case when the list is null or empty
        return ResponseEntity.status(HttpStatus.OK).body(orders);
    }
}
