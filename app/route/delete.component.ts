import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template : '<h3>{{message}}</h3>'
})
export class DeleteComponent {
    message: string = null;

    constructor(private route: ActivatedRoute, private router: Router) {
    }
    
    ngOnInit() {
      
        this.route.params.subscribe(params => {
            var code = params["code"];
            var idx = 0;
            for (var c of CountryRepository.GetCountries()) {
                if (c.Code == code) 
                {
                    if (confirm("Do you want to delete country??"))
                    {
                        CountryRepository.GetCountries().splice(idx, 1);
                    }
                    this.message = "Country " + code + " was deleted!"
                    break;
                }
                idx++;
            }

            // redirect to list (Manual Navigation)
            // this.router.navigate( ['list']);
        });


    }
}