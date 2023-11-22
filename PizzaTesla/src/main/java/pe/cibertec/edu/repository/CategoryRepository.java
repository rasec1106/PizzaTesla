package pe.cibertec.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pe.cibertec.edu.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{

}
