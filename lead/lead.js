import { LightningElement, api } from 'lwc';

export default class Lead extends LightningElement {

    @api name;
    @api company;
    @api status;

}
