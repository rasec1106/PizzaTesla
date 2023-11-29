USE pizzatesla;
-- Inserci�n de registros en la tabla Pizza
INSERT INTO Product (categoryId, name, description, price, ingredients, preparationTime, imageUrl)
VALUES 
(1, 'Pizza Margarita', 'Deliciosa pizza cl�sica con salsa de tomate, queso mozzarella y albahaca fresca', 9.99, 'Tomate, Mozzarella, Albahaca', 20, 'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561015/PizzaTesla/1-11/1Pizza_Margarita_jk01xz.jpg'),
(2, 'Pizza Vegetariana', 'Sabrosa pizza vegetariana con salsa de tomate, queso mozzarella y una variedad de vegetales frescos', 10.99, 'Tomate, Mozzarella, Pimientos, Champi�ones, Cebolla, Aceitunas', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561015/PizzaTesla/1-11/2Pizza_Vegetariana_ohgwca.jpg'),
(3, 'Pizza de Carne', 'Deliciosa pizza con salsa de tomate, queso mozzarella y una selecci�n de carnes', 11.99, 'Tomate, Mozzarella, Carne de res, Jam�n, Salchicha', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561015/PizzaTesla/1-11/3Pizza_de_Carne_m7uoqz.jpg'),
(4, 'Pizza Especial', 'Exquisita pizza con salsa de tomate, queso mozzarella y una combinaci�n �nica de ingredientes especiales', 12.99, 'Tomate, Mozzarella, Pepperoni, Champi�ones, Cebolla, Aceitunas, Jalape�os', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561015/PizzaTesla/1-11/4Pizza_Especial_yexjb5.jpg'),
(5, 'Pizza de Quesos', 'Irresistible pizza con una selecci�n de quesos variados y salsa de tomate', 10.99, 'Tomate, Mozzarella, Queso Cheddar, Queso Azul, Parmesano, Queso de Cabra', 30,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561014/PizzaTesla/1-11/5Pizza_de_Quesos_peppnq.jpg'),
-- Inserci�n de registros en la tabla Pizza
(1, 'Pizza Supreme', 'Deliciosa pizza cl�sica con salsa de tomate, queso mozzarella, pepperoni, champi�ones, pimientos y aceitunas', 12.99, 'Tomate, Mozzarella, Pepperoni, Champi�ones, Pimientos, Aceitunas', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561014/PizzaTesla/1-11/6Pizza_Supreme_qtl3u1.jpg'),
(2, 'Pizza Veggie Delight', 'Sabrosa pizza vegetariana con salsa de tomate, queso mozzarella, espinacas, tomate cherry y aceitunas', 11.99, 'Tomate, Mozzarella, Espinacas, Tomate Cherry, Aceitunas', 20,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561014/PizzaTesla/1-11/7Pizza_Veggie_Delight_tg4iv2.jpg'),
(3, 'Pizza BBQ Lover', 'Deliciosa pizza con salsa BBQ, queso mozzarella, pollo a la parrilla, tocino y cebolla caramelizada', 13.99, 'Salsa BBQ, Mozzarella, Pollo a la parrilla, Tocino, Cebolla caramelizada', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561014/PizzaTesla/1-11/8Pizza_BBQ_Lover_in58tr.jpg'),
(4, 'Pizza Hawaiana Loco', 'Ex�tica pizza con salsa de tomate, queso mozzarella, jam�n, pi�a, jalape�os y salsa picante', 12.99, 'Tomate, Mozzarella, Jam�n, Pi�a, Jalape�os, Salsa picante', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561014/PizzaTesla/1-11/9Pizza_Hawaiana_Loco_b2ajsr.jpg'),
(5, 'Pizza Four Cheese', 'Irresistible pizza con salsa de tomate, queso mozzarella, queso azul, queso de cabra y parmesano', 10.99, 'Tomate, Mozzarella, Queso Azul, Queso de Cabra, Parmesano', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561014/PizzaTesla/1-11/10Pizza_Four_Cheese_uzix4r.jpg'),
-- Inserci�n de registros en la tabla Pizza
(1, 'Pizza Extravaganza', 'Una explosi�n de sabores con salsa de tomate, queso mozzarella, pepperoni, salchicha italiana, champi�ones, pimientos y cebolla', 13.99, 'Tomate, Mozzarella, Pepperoni, Salchicha italiana, Champi�ones, Pimientos, Cebolla', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561015/PizzaTesla/1-11/11Pizza_Extravaganza_dawgri.jpg'),
(2, 'Pizza Verde Delight', 'Una opci�n vegana con salsa de pesto, queso vegano, espinacas, tomate, aceitunas y albahaca fresca', 11.99, 'Pesto, Queso vegano, Espinacas, Tomate, Aceitunas, Albahaca fresca', 20,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561363/PizzaTesla/12-22/Pizza_Verde_Delight_nywtts.jpg'),
(3, 'Pizza Meat Lovers', 'Un fest�n de carne con salsa de tomate, queso mozzarella, jam�n, pepperoni, salchicha italiana y carne de res', 14.99, 'Tomate, Mozzarella, Jam�n, Pepperoni, Salchicha italiana, Carne de res', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561362/PizzaTesla/12-22/Pizza_Meat_Lovers_el5hbb.jpg'),
(4, 'Pizza Picante Mexicana', 'Una explosi�n de sabores mexicanos con salsa de tomate picante, queso mozzarella, carne de res sazonada, jalape�os, cebolla y cilantro', 12.99, 'Tomate picante, Mozzarella, Carne de res sazonada, Jalape�os, Cebolla, Cilantro', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561363/PizzaTesla/12-22/Pizza_Picante_Mexicana_swyyoz.jpg'),
(5, 'Pizza Gourmet de Trufa', 'Una experiencia culinaria sofisticada con salsa de trufa, queso mozzarella, champi�ones porcini, queso de cabra y r�cula fresca', 15.99, 'Salsa de trufa, Mozzarella, Champi�ones porcini, Queso de cabra, R�cula fresca', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561362/PizzaTesla/12-22/Pizza_Gourmet_de_Trufa_whsymx.jpg'),
-- Inserci�n de registros en la tabla Pizza
(1, 'Pizza Primavera', 'Una explosi�n de sabores frescos con salsa de tomate, queso mozzarella, tomate cherry, espinacas, champi�ones y aceitunas', 12.99, 'Tomate, Mozzarella, Tomate Cherry, Espinacas, Champi�ones, Aceitunas', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561363/PizzaTesla/12-22/Pizza_Primavera_wwkv0e.jpg'),
(2, 'Pizza Vegana de Tofu', 'Deliciosa pizza vegana con salsa de tomate, queso vegano, tofu, pimientos, cebolla y aceitunas', 11.99, 'Tomate, Queso vegano, Tofu, Pimientos, Cebolla, Aceitunas', 20,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561363/PizzaTesla/12-22/Pizza_Vegana_de_Tofu_e7rffw.jpg'),
(3, 'Pizza de Pollo Teriyaki', 'Una fusi�n de sabores con salsa teriyaki, queso mozzarella, pollo a la parrilla, cebolla caramelizada y cilantro', 13.99, 'Salsa teriyaki, Mozzarella, Pollo a la parrilla, Cebolla caramelizada, Cilantro', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561362/PizzaTesla/12-22/Pizza_de_Pollo_Teriyaki_wrlyxu.jpg'),
(4, 'Pizza Mediterr�nea', 'Una deliciosa combinaci�n mediterr�nea con salsa de tomate, queso mozzarella, aceitunas kalamata, tomate seco, queso feta y or�gano', 12.99, 'Tomate, Mozzarella, Aceitunas kalamata, Tomate seco, Queso feta, Or�gano', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561362/PizzaTesla/12-22/Pizza_Mediterr%C3%A1nea_umlmoj.jpg'),
(5, 'Pizza de Chocolate y Frutas', 'Un postre irresistible con salsa de chocolate, queso mozzarella, fresas, pl�tano, nueces y az�car glas', 10.99, 'Chocolate, Mozzarella, Fresas, Pl�tano, Nueces, Az�car glas', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561362/PizzaTesla/12-22/Pizza_de_Chocolate_y_Frutas_ekluup.jpg'),
-- Inserci�n de registros en la tabla Pizza
(1, 'Pizza del Bosque', 'Una deliciosa combinaci�n de sabores naturales con salsa de tomate, queso mozzarella, champi�ones silvestres, espinacas, cebolla caramelizada y aceite de trufa', 12.99, 'Tomate, Mozzarella, Champi�ones silvestres, Espinacas, Cebolla caramelizada, Aceite de trufa', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561362/PizzaTesla/12-22/Pizza_del_Bosque_gi3xcj.jpg'),
(2, 'Pizza Vegana de Calabaza', 'Una opci�n vegana llena de sabor con salsa de tomate, queso vegano, calabaza asada, espinacas, cebolla roja y nueces', 11.99, 'Tomate, Queso vegano, Calabaza asada, Espinacas, Cebolla roja, Nueces', 20,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561363/PizzaTesla/12-22/Pizza_Vegana_de_Calabaza_akrtzs.jpg'),
(3, 'Pizza Barbecue de Cerdo Desmenuzado', 'Una pizza jugosa y ahumada con salsa barbacoa, queso mozzarella, cerdo desmenuzado, cebolla morada y cilantro fresco', 13.99, 'Salsa barbacoa, Mozzarella, Cerdo desmenuzado, Cebolla morada, Cilantro fresco', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561088/PizzaTesla/23-33/23Pizza_Barbecue_de_Cerdo_Desmenuzado_ezjbjf.jpg'),
(4, 'Pizza Mediterr�nea de Mariscos', 'Una explosi�n de sabores mediterr�neos con salsa de tomate, queso mozzarella, camarones, calamares, aceitunas kalamata y albahaca fresca', 12.99, 'Tomate, Mozzarella, Camarones, Calamares, Aceitunas kalamata, Albahaca fresca', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561088/PizzaTesla/23-33/24Pizza_Mediterr%C3%A1nea_de_Mariscos_ztcfpn.jpg'),
(5, 'Pizza Dulce de Nutella y Malvaviscos', 'Un postre irresistible con base de Nutella, queso mozzarella, malvaviscos, nueces y sirope de chocolate', 10.99, 'Nutella, Mozzarella, Malvaviscos, Nueces, Sirope de chocolate', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561087/PizzaTesla/23-33/25Pizza_Dulce_de_Nutella_y_Malvaviscos_zdoqbo.jpg'),
-- Inserci�n de registros en la tabla Pizza
(1, 'Pizza del Cielo', 'Una combinaci�n celestial con salsa de tomate, queso mozzarella, pollo a la parrilla, pi�a, jalape�os y cilantro', 12.99, 'Tomate, Mozzarella, Pollo a la parrilla, Pi�a, Jalape�os, Cilantro', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561087/PizzaTesla/23-33/26Pizza_del_Cielo_n8fyh5.jpg'),
(2, 'Pizza Vegana de Remolacha', 'Una opci�n vegana vibrante con salsa de tomate, queso vegano, remolacha asada, espinacas, cebolla roja y nueces', 11.99, 'Tomate, Queso vegano, Remolacha asada, Espinacas, Cebolla roja, Nueces', 20,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561087/PizzaTesla/23-33/27Pizza_Vegana_de_Remolacha_duukiy.jpg'),
(3, 'Pizza de Ternera Ahumada', 'Una deliciosa combinaci�n de sabores con salsa de tomate, queso mozzarella, ternera ahumada, pimientos asados y cebolla caramelizada', 13.99, 'Tomate, Mozzarella, Ternera ahumada, Pimientos asados, Cebolla caramelizada', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561087/PizzaTesla/23-33/28Pizza_de_Ternera_Ahumada_kwnnrl.jpg'),
(4, 'Pizza Griega de Espinacas', 'Una fusi�n mediterr�nea con salsa de tomate, queso mozzarella, espinacas, aceitunas kalamata, tomate seco y queso feta', 12.99, 'Tomate, Mozzarella, Espinacas, Aceitunas kalamata, Tomate seco, Queso feta', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561087/PizzaTesla/23-33/29Pizza_Griega_de_Espinacas_rl1aju.jpg'),
(5, 'Pizza de Postre de Manzana Caramelizada', 'Un dulce deleite con base de crema de vainilla, queso mozzarella, manzanas caramelizadas, nueces y canela', 10.99, 'Crema de vainilla, Mozzarella, Manzanas caramelizadas, Nueces, Canela', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561087/PizzaTesla/23-33/30Pizza_de_Postre_de_Manzana_Caramelizada_jypyx5.jpg'),
-- Inserci�n de registros en la tabla Pizza
(1, 'Pizza del Mar', 'Una explosi�n de sabores marinos con salsa de tomate, queso mozzarella, camarones, mejillones, calamares y albahaca fresca', 14.99, 'Tomate, Mozzarella, Camarones, Mejillones, Calamares, Albahaca fresca', 30,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561087/PizzaTesla/23-33/31Pizza_del_Mar_ej2nff.jpg'),
(2, 'Pizza Vegana de Esp�rragos', 'Una opci�n vegana llena de frescura con salsa de tomate, queso vegano, esp�rragos, tomates cherry y aceitunas negras', 11.99, 'Tomate, Queso vegano, Esp�rragos, Tomates cherry, Aceitunas negras', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561088/PizzaTesla/23-33/32Pizza_Vegana_de_Esp%C3%A1rragos_entaqu.jpg'),
(3, 'Pizza Picante de Chorizo', 'Una explosi�n de sabor picante con salsa de tomate, queso mozzarella, chorizo picante, jalape�os y cilantro fresco', 13.99, 'Tomate, Mozzarella, Chorizo picante, Jalape�os, Cilantro fresco', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684561088/PizzaTesla/23-33/33Spicy_Chorizo_Pizza_b90jag.jpg'),
(4, 'Pizza Mediterr�nea de Berenjena', 'Una combinaci�n mediterr�nea deliciosa con salsa de tomate, queso mozzarella, berenjena asada, aceitunas kalamata y queso feta', 12.99, 'Tomate, Mozzarella, Berenjena asada, Aceitunas kalamata, Queso feta', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608932/PizzaTesla/34-45/34_Pizza_Mediterr%C3%A1nea_de_Berenjena_xknnvh.jpg'),
(5, 'Pizza Dulce de Frutas Tropicales', 'Un postre tropical irresistible con base de crema de coco, queso mozzarella, pi�a, mango, kiwi y coco rallado', 10.99, 'Crema de coco, Mozzarella, Pi�a, Mango, Kiwi, Coco rallado', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/35_Pizza_Dulce_de_Frutas_Tropicales_pemzdr.jpg'),
-- Inserci�n de registros en la tabla Pizza
(1, 'Pizza del Fuego', 'Una explosi�n de sabor picante con salsa de tomate, queso mozzarella, jalape�os, chorizo, cebolla roja y cilantro fresco', 14.99, 'Tomate, Mozzarella, Jalape�os, Chorizo, Cebolla roja, Cilantro fresco', 30,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/36_Pizza_del_Fuego_pi3shq.jpg'),
(2, 'Pizza Vegana de Berenjena a la Parrilla', 'Una opci�n vegana llena de sabor con salsa de tomate, queso vegano, berenjena a la parrilla, espinacas, tomates secos y aceitunas negras', 11.99, 'Tomate, Queso vegano, Berenjena a la parrilla, Espinacas, Tomates secos, Aceitunas negras', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/37_Pizza_Vegana_de_Berenjena_a_la_Parrilla_hv6rg5.jpg'),
(3, 'Pizza de Pollo Teriyaki', 'Una deliciosa combinaci�n de sabores asi�ticos con salsa teriyaki, queso mozzarella, pollo teriyaki, cebolla caramelizada y pimientos asados', 13.99, 'Salsa teriyaki, Mozzarella, Pollo teriyaki, Cebolla caramelizada, Pimientos asados', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/38_Pizza_de_Pollo_Teriyaki_ltssnz.jpg'),
(4, 'Pizza Ex�tica de Cordero', 'Una fusi�n de sabores ex�ticos con salsa de tomate, queso mozzarella, cordero marinado, aceitunas verdes, tomates cherry y menta fresca', 12.99, 'Tomate, Mozzarella, Cordero marinado, Aceitunas verdes, Tomates cherry, Menta fresca', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/39_Pizza_Ex%C3%B3tica_de_Cordero_xtxm4v.jpg'),
(5, 'Pizza Dulce de Nutella y Frutos Rojos', 'Un postre indulgente con base de Nutella, queso mozzarella, frutos rojos, almendras y miel', 10.99, 'Nutella, Mozzarella, Frutos rojos, Almendras, Miel', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/40_Pizza_Dulce_de_Nutella_y_Frutos_Rojos_xnl0t8.jpg'),
-- Inserci�n de registros en la tabla Pizza
(1, 'Pizza del Bosque', 'Una experiencia forestal con salsa de tomate, queso mozzarella, champi�ones, espinacas, cebolla caramelizada y aceite de trufa', 14.99, 'Tomate, Mozzarella, Champi�ones, Espinacas, Cebolla caramelizada, Aceite de trufa', 30,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/41_Pizza_del_Bosque_frdyac.jpg'),
(2, 'Pizza Vegana de Calabaza', 'Una opci�n vegana de oto�o con salsa de tomate, queso vegano, calabaza asada, nueces, r�cula y sirope de arce', 11.99, 'Tomate, Queso vegano, Calabaza asada, Nueces, R�cula, Sirope de arce', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608378/PizzaTesla/34-45/42_Pizza_Vegana_de_Calabaza_qdn0ey.jpg'),
(3, 'Pizza de Barbacoa Mexicana', 'Una explosi�n de sabores mexicanos con salsa de barbacoa, queso mozzarella, carne de res deshebrada, jalape�os, cebolla y cilantro fresco', 13.99, 'Salsa de barbacoa, Mozzarella, Carne de res deshebrada, Jalape�os, Cebolla, Cilantro fresco', 28,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/43_Pizza_de_Barbacoa_Mexicana_wrrwdu.jpg'),
(4, 'Pizza Gourmet de Higos y Prosciutto', 'Una combinaci�n elegante de sabores con salsa de tomate, queso mozzarella, higos frescos, prosciutto, r�cula y reducci�n de bals�mico', 12.99, 'Tomate, Mozzarella, Higos frescos, Prosciutto, R�cula, Reducci�n de bals�mico', 22,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/44_Pizza_Gourmet_de_Higos_y_Prosciutto_jakshv.jpg'),
(5, 'Pizza Dulce de Chocolate y Malvaviscos', 'Un placer dulce con base de chocolate, queso mozzarella, malvaviscos, almendras tostadas y virutas de chocolate', 10.99, 'Chocolate, Mozzarella, Malvaviscos, Almendras tostadas, Virutas de chocolate', 25,'https://res.cloudinary.com/djsl4a5py/image/upload/v1684608377/PizzaTesla/34-45/45_Pizza_Dulce_de_Chocolate_y_Malvaviscos_ugon0k.jpg');