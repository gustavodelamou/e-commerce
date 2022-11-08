import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  form!: FormGroup

  constructor(private reactiveForm: FormBuilder, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.form = this.reactiveForm.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    })
  }

  onSubmit() {
    this.categoriesService.postCategory(this.form.value).subscribe({
      next: (data) => {
        Swal.fire({
          title: "Categorie ajoutee avec succes",
          icon: 'success',
          closeButtonAriaLabel: "Fermer"
        })
      },
      error: (error) => {
        Swal.fire({
          title: "Impossible d'ajouter cette categorie",
          icon: 'error',
          closeButtonAriaLabel: "Fermer"
        })
      }
    })


  }

}
