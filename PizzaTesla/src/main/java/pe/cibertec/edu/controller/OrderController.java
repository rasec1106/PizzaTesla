package pe.cibertec.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.cibertec.edu.model.Order;
import pe.cibertec.edu.service.impl.OrderServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {
  @Autowired
  OrderServiceImpl orderServiceImpl;

  @GetMapping("/list")
  public List<Order> listOrders() {
    return orderServiceImpl.getAllPizzaOrders();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Order> getOrderById(@PathVariable long id) {
    Order searchedOrder = orderServiceImpl.getPizzaOrderById(id);
    return new ResponseEntity<>(searchedOrder, HttpStatus.OK);
  }

  @PutMapping("/{id}/{status}")
  public ResponseEntity<Order> updateOrder(@PathVariable long id, @PathVariable String status) {
    Order searchedOrder = orderServiceImpl.getPizzaOrderById(id);
    searchedOrder.setStatus(status);
    Order updatedOrder = orderServiceImpl.savePizzaOrder(searchedOrder);
    return new ResponseEntity<>(updatedOrder, HttpStatus.CREATED);
  }

  @PostMapping("/new")
  public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
    Order newOrder = orderServiceImpl.savePizzaOrder(order);
    return new ResponseEntity<>(newOrder, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public void deleteOrder(@PathVariable long id) {
    orderServiceImpl.deletePizzaOrderById(id);
  }
}
