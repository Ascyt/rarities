import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Rarity {
  name: string;
  color: string;
  colorHex: string;
  secondaryColor: string;
  secondaryColorHex: string;
  cssClass: string;
}
@Component({
  selector: 'app-rarity-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rarity-list.component.html',
  styleUrl: './rarity-list.component.scss'
})
export class RarityListComponent {
  rarities: Rarity[] = [
    {name: 'Common', color: 'Grey', colorHex: '#c0c0c0', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'common'},
    {name: 'Uncommon', color: 'Lime-green', colorHex: '#00ff00', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'uncommon'},
    {name: 'Rare', color: 'Yellow', colorHex: '#ffff00', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'rare'},
    {name: 'Super Rare', color: 'Blue', colorHex: '#0080ff', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'super-rare'},
    {name: 'Epic', color: 'Purple', colorHex: '#8000ff', secondaryColor:'White', secondaryColorHex:'#ffffff', cssClass: 'epic'},
    {name: 'Legendary', color: 'Orange', colorHex: '#ff8000', secondaryColor:'White', secondaryColorHex:'#ffffff', cssClass: 'legendary'},
    {name: 'Mythical', color: 'Red', colorHex: '#ff0000', secondaryColor:'White', secondaryColorHex:'#ffffff', cssClass: 'mythical'},
    {name: 'Divine', color: 'Cyan', colorHex: '#00ffff', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'divine'},
    {name: 'Godlike', color: 'Rainbow/White', colorHex: 'rainbow/#ffffff', secondaryColor:'Black', secondaryColorHex:'#000000', cssClass: 'godlike'},
    {name: 'Omega', color: 'Black', colorHex: '#000000', secondaryColor:'Rainbow/White', secondaryColorHex:'rainbow/#ffffff', cssClass: 'omega'}
  ];
}
