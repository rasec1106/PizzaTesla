package pe.cibertec.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.cibertec.edu.model.Order;
import pe.cibertec.edu.repository.OrderRepository;
import pe.cibertec.edu.service.OrderService;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
  @Autowired
  OrderRepository orderRepository;

  @Override
  public List<Order> getAllPizzaOrders() {
    return orderRepository.findAll();
  }

  @Override
  public Order savePizzaOrder(Order order) {
    return orderRepository.save(order);
  }

  @Override
  public Order getPizzaOrderById(long id) {
    return orderRepository.findById(id).orElse(null);
  }

  @Override
  public void deletePizzaOrderById(long id) {
    orderRepository.deleteById(id);
  }
}
