import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { faStar, faGem, faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Rarity {
  name: string;
  color: string;
  colorHex: string;
  secondaryColor: string;
  secondaryColorHex: string;
  cssClass: string;
  iconClass: string;
  iconAmount: number;
}
@Component({
  selector: 'app-rarity-list',
  standalone: true,
  imports: [CommonModule, NgbModule, FontAwesomeModule],
  templateUrl: './rarity-list.component.html',
  styleUrl: './rarity-list.component.scss'
})
export class RarityListComponent {
  rarities: Rarity[] = [
    {name: 'Common', color: 'Grey', colorHex: '#c0c0c0', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'common', iconClass: 'faStar', iconAmount: 1},
    {name: 'Uncommon', color: 'Lime-green', colorHex: '#00ff00', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'uncommon', iconClass: 'faStar', iconAmount: 2},
    {name: 'Rare', color: 'Yellow', colorHex: '#ffff00', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'rare', iconClass: 'faStar', iconAmount: 3},
    {name: 'Super Rare', color: 'Blue', colorHex: '#0080ff', secondaryColor:'White', secondaryColorHex:'#ffffff', cssClass: 'super-rare', iconClass: 'faStar', iconAmount: 4},
    {name: 'Epic', color: 'Purple', colorHex: '#8000ff', secondaryColor:'White', secondaryColorHex:'#ffffff', cssClass: 'epic', iconClass: 'faStar', iconAmount: 5},
    {name: 'Mystic', color: 'Magenta', colorHex: '#ff00ff', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'mystic', iconClass: 'faGem', iconAmount: 1},
    {name: 'Legendary', color: 'Orange', colorHex: '#ff8000', secondaryColor:'White', secondaryColorHex:'#ffffff', cssClass: 'legendary', iconClass: 'faGem', iconAmount: 2},
    {name: 'Mythical', color: 'Red', colorHex: '#ff0000', secondaryColor:'White', secondaryColorHex:'#ffffff', cssClass: 'mythical', iconClass: 'faGem', iconAmount: 3},
    {name: 'Divine', color: 'Cyan', colorHex: '#00ffff', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'divine', iconClass: 'faGem', iconAmount: 4},
    {name: 'Godlike', color: 'Rainbow/White', colorHex: 'rainbow/#ffffff', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'godlike', iconClass: 'faGem', iconAmount: 5},
    {name: 'Omega I', color: 'Black', colorHex: '#000000', secondaryColor:'Rainbow/White', secondaryColorHex:'rainbow/#ffffff', cssClass: 'omega', iconClass: 'faCrown', iconAmount: 1},
    {name: 'Omega II', color: 'Black', colorHex: '#000000', secondaryColor:'Rainbow/White', secondaryColorHex:'rainbow/#ffffff', cssClass: 'omega', iconClass: 'faCrown', iconAmount: 2},
    {name: 'Omega III', color: 'Black', colorHex: '#000000', secondaryColor:'Rainbow/White', secondaryColorHex:'rainbow/#ffffff', cssClass: 'omega', iconClass: 'faCrown', iconAmount: 3},
    {name: 'Omega IV', color: 'Black', colorHex: '#000000', secondaryColor:'Rainbow/White', secondaryColorHex:'rainbow/#ffffff', cssClass: 'omega', iconClass: 'faCrown', iconAmount: 4},
    {name: 'Omega V', color: 'Black', colorHex: '#000000', secondaryColor:'Rainbow/White', secondaryColorHex:'rainbow/#ffffff', cssClass: 'omega', iconClass: 'faCrown', iconAmount: 5},
  ];
}
