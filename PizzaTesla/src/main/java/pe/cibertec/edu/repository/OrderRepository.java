package pe.cibertec.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.cibertec.edu.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
