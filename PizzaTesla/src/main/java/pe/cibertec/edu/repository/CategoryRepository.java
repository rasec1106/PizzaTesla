package pe.cibertec.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.cibertec.edu.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
