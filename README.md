# PAgroAli
This project consists in building a web application of maintenance management agrifood products.

## Build with : 
Back-end
* Laravel framework
* Mysql

Front-end
* Reactjs
* Html, Css & bootstrap

## Back-end
The different routes on the back-end side
  ### Public routes
   * Login(Post) : http://localhost:8000/api/v0/login/
   * Register(Post) : http://localhost:8000/api/v0/register/
   * GetAll(get) : http://localhost:8000/api/v0/products/
   * Search a product(get): http://localhost:8000/api/v0/products/search/{product_name}

  ### Private routes
   * Create(Post) : http://localhost:8000/api/v0/products/
   * Update(Put) : http://localhost:8000/api/v0/products/{id}
   * Delete(Post) : http://localhost:8000/api/v0/products/{id}
   * GetAll(Get) : http://localhost:8000/api/v0/products/
   * Logout(Post) : http://localhost:8000/api/v0/logout/
   * Get one product(Get) : http://localhost:8000/api/v0/products/{id}
   * Search a product(Get) : http://localhost:8000/api/v0/products/search/{product_name}

## Front-end
The different routes on the front-end side
  ### Public routes
   * Acceuil : http://localhost:3000/
   * Contact: http://localhost:3000/contact
   * Login: http://localhost:3000/login
   * SignUp: http://localhost:3000/register
   * Description produit: http://localhost:3000/products/description/{:slug}
  
  ### Private routes
   * Acceuil : http://localhost:3000/
   * Ajouter produit: http://localhost:3000/addProduct
   * Logout : http://localhost:3000/logout
   * Description produit: http://localhost:3000/products/description/{:slug}
   * Edit/Modify : http://localhost:3000/products/edit/{:slug}
   * Delete (It's not necessary to have a route, so we just have the possibility to delete )
