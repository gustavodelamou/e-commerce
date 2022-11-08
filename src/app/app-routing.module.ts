import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: 'categories-list', component: CategoriesListComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: 'edit-category', component: EditCategoryComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
