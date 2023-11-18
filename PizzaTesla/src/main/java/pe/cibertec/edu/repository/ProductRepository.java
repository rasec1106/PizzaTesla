package pe.cibertec.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.cibertec.edu.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}