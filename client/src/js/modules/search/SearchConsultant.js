import React from 'react';
import {computed, observable, action} from "mobx"


// import instance from service layer to search on the server
import searchService from '../../service/SearchService';

class SearchConsultant {


    @observable filterTermValue = '';
    @observable foundedResult;

//TODO replace searchForConsultant method i server with
// https://stackoverflow.com/questions/37554828/using-the-mobx-action-decorator-with-async-functions-and-then


    @action searchForConsultant=filterTermValue=>{
     this.filterTermValue = filterTermValue.toLowerCase().trim();

     let response = searchService.searchConsultant(filterTermValue);

        if (response !== null || response !== undefined) {

            this.foundedResult= response;

        } else if (response === null) {

            this.foundedResult= 'wait';
        }
    };

    @action onChangeFilterTerm = value => {
        this.filterTermValue = value.toLowerCase();
        this.searchForConsultant(this.filterTermValue);


    }
}


const searchConsultantState = new SearchConsultant;

export default searchConsultantState;
/**
 * tips for this page
 * https://stackoverflow.com/questions/37865454/mobx-filter-countries-in-react-native
 **/