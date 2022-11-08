import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Categories } from '../models/categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories!: Array<Categories>

  category!: Categories

  form!: FormGroup

  constructor(private categoryService: CategoriesService, private reactiveForm: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.reactiveForm.group({
      name: new FormControl(""),
      description: new FormControl("")
    })

    this.categoryService.getAll()
    .subscribe({
      next: (data) => this.categories = data,
      error: (error) => console.error(error)
    })
  }

  getCategory(id: number) {
    this.categoryService.getCategoryById(id).subscribe({
      next: (data) => this.category = data,
      error: (error) => console.error(error)
    })
  }

  onDelete(id: number): void {
    Swal.fire({
      title: 'Voulez-vous supprimer cette categorie?',
      text: "Cette categorie sera supprimee de maniere definitive",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
    }).then((result) => {

      if (result.isConfirmed) {
        this.categoryService.deleteCategory(id).subscribe({
          next: (data) => {
            Swal.fire({
              title: "Categorie supprimee avec succes",
              icon: 'success',
              closeButtonAriaLabel: "Fermer"
            })
          },
          error: (error) => {
            Swal.fire({
              title: "Impossible de supprimer cette categorie",
              icon: 'error',
              closeButtonAriaLabel: "Fermer"
            })
          }
        })
      }
    })

  }

  onSubmit(id: number) {
    this.categoryService.editCategory(id, this.form.value).subscribe({
      next: (data) => {
        Swal.fire({
          title: "Categorie a ete modifiee avec succes",
          icon: 'success',
          closeButtonAriaLabel: "Fermer"
        })
      },
      error: (error) => {
        Swal.fire({
          title: "Impossible de modifier cette categorie",
          icon: 'error',
          closeButtonAriaLabel: "Fermer"
        })
      }
    })
  }

}
