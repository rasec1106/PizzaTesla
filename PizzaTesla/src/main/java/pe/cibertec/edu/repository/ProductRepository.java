package pe.cibertec.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.cibertec.edu.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}