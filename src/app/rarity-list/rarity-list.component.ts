import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

interface Rarity {
  name: string;
  color: string;
  colorHex: string;
  secondaryColor: string;
  secondaryColorHex: string;
  cssClass: string;
  iconClass: any; // ['fas', 'star'] or ['fas', 'gem'] or ['fas', 'crown']. Not sure why type string[] doesn't work.
  iconAmount: number;
  abbreviation: string;
  itemIndex: number;
  description: string|undefined;
}
@Component({
  selector: 'app-rarity-list',
  standalone: true,
  imports: [CommonModule, NgbModule, FontAwesomeModule],
  templateUrl: './rarity-list.component.html',
  styleUrl: './rarity-list.component.scss'
})
export class RarityListComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  rarities: Rarity[] = [
    {
      name: 'Common', 
      color: 'Grey', 
      colorHex: '#c0c0c0', 
      secondaryColor:'Black', 
      secondaryColorHex:'#000000', 
      cssClass: 'common', 
      iconClass: ['fas', 'star'], 
      iconAmount: 1, 
      abbreviation: 'CMN', 
      itemIndex: 1, 
      description: 'Everywhere in early game, starts appearing less and less in middle game to avoid clutter; should not appear at all in late game.'
    },
    {
      name: 'Uncommon', 
      color: 'Lime-green', 
      colorHex: '#00ff00', 
      secondaryColor:'Black', 
      secondaryColorHex:'#000000', 
      cssClass: 'uncommon', 
      iconClass: ['fas', 'star'], 
      iconAmount: 2, 
      abbreviation: 'UNC', 
      itemIndex: 2, 
      description: 'Pretty common in early game, shows up everywhere towards middle game, until it becomes rarer again until it should not appear at all in very late game.'
    },
    {
      name: 'Rare', 
      color: 'Yellow', 
      colorHex: '#ffff00', 
      secondaryColor:'Black', 
      secondaryColorHex:'#000000', 
      cssClass: 'rare', 
      iconClass: ['fas', 'star'], 
      iconAmount: 3, 
      abbreviation: 'RAR', 
      itemIndex: 3, 
      description: 'Not as common in early game, becomes pretty common in middle game, until it appears less in late game.'
    },
    {
      name: 'Super Rare', 
      color: 'Blue', 
      colorHex: '#0080ff', 
      secondaryColor:'White', 
      secondaryColorHex:'#ffffff', 
      cssClass: 'super-rare', 
      iconClass: ['fas', 'star'], 
      iconAmount: 4, 
      abbreviation: 'SPR', 
      itemIndex: 4, 
      description: 'Very rare in early game, becomes more common in middle game, appears pretty commonly in late game.'
    },
    {
      name: 'Epic', 
      color: 'Purple', 
      colorHex: '#8000ff', 
      secondaryColor:'White', 
      secondaryColorHex:'#ffffff', 
      cssClass: 'epic', 
      iconClass: ['fas', 'star'], 
      iconAmount: 5, 
      abbreviation: 'EPC', 
      itemIndex: 5, 
      description: 'Appears only on special occasions in early game, is fairly uncommon in middle game, is a little more common in late game.'
    },
    {
      name: 'Legendary', 
      color: 'Orange', 
      colorHex: '#ff8000', 
      secondaryColor:'White', 
      secondaryColorHex:'#ffffff', 
      cssClass: 'legendary', 
      iconClass: ['fas', 'gem'], 
      iconAmount: 1, 
      abbreviation: 'LGD', 
      itemIndex: 6,
      description: 'Near-unobtainable in early game, pretty rare in middle game, still pretty uncommon in late game.'
    },
    {
      name: 'Mythical', 
      color: 'Red', 
      colorHex: '#ff0000', 
      secondaryColor:'White', 
      secondaryColorHex:'#ffffff', 
      cssClass: 'mythical', 
      iconClass: ['fas', 'gem'], 
      iconAmount: 2, 
      abbreviation: 'MTH', 
      itemIndex: 7,
      description: 'Unobtainable in early game, very rare in middle game, pretty rare in late game.'
    },
    {
      name: 'Celestial', 
      color: 'Magenta', 
      colorHex: '#ff00ff', 
      secondaryColor:'Black', 
      secondaryColorHex:'#000000', 
      cssClass: 'celestial', 
      iconClass: ['fas', 'gem'], 
      iconAmount: 3, 
      abbreviation: 'CSL', 
      itemIndex: 8,
      description: 'Near-unobtainable in middle game, very rare in late game.'
    },
    {
      name: 'Divine', 
      color: 'Cyan', 
      colorHex: '#00ffff', 
      secondaryColor:'Black', 
      secondaryColorHex:'#000000', 
      cssClass: 'divine', 
      iconClass: ['fas', 'gem'], 
      iconAmount: 4, 
      abbreviation: 'DVN', 
      itemIndex: 9,
      description: 'Unobtainable in middle game, requires a lot of grind in late game.'
    },
    {
      name: 'Godlike', 
      color: 'Rainbow/White', 
      colorHex: 'rainbow/#ffffff', 
      secondaryColor:'Black', 
      secondaryColorHex:'#000000', 
      cssClass: 'godlike', 
      iconClass: ['fas', 'gem'], 
      iconAmount: 5, 
      abbreviation: 'GDL', 
      itemIndex: 10,
      description: 'Should require a couple of hours of grind to get even a single one in very late game.'
    },
    {
      name: 'Omega I', 
      color: 'Black', 
      colorHex: '#000000', 
      secondaryColor:'Rainbow/White', 
      secondaryColorHex:'rainbow/#ffffff', 
      cssClass: 'omega', 
      iconClass: ['fas', 'crown'], 
      iconAmount: 1, 
      abbreviation: 'O:1', 
      itemIndex: 11,
      description: 'Should ideally only be obtainable for those with hundreds of hours of playtime. Shouldn\'t spawn naturally, and should only be obtainable through item merging or special events.'
    },
    {
      name: 'Omega II', 
      color: 'Black', 
      colorHex: '#000000', 
      secondaryColor:'Rainbow/White', 
      secondaryColorHex:'rainbow/#ffffff', 
      cssClass: 'omega', 
      iconClass: ['fas', 'crown'], 
      iconAmount: 2, 
      abbreviation: 'O:2', 
      itemIndex: 12,
      description: 'There should not be many players worldwide who have one of those.'
    },
    {
      name: 'Omega III', 
      color: 'Black', 
      colorHex: '#000000', 
      secondaryColor:'Rainbow/White', 
      secondaryColorHex:'rainbow/#ffffff', 
      cssClass: 'omega', 
      iconClass: ['fas', 'crown'], 
      iconAmount: 3, 
      abbreviation: 'O:3', 
      itemIndex: 13,
      description: 'Even for a large game with an active and long-established playerbase, only a handful of players should own one of those.'
    },
    {
      name: 'Omega IV', 
      color: 'Black', 
      colorHex: '#000000', 
      secondaryColor:'Rainbow/White', 
      secondaryColorHex:'rainbow/#ffffff', 
      cssClass: 'omega', 
      iconClass: ['fas', 'crown'], 
      iconAmount: 4, 
      abbreviation: 'O:4', 
      itemIndex: 14,
      description: 'Should be essentially unobtainable, unless if someone devotes their entire life to the game.'
    },
    {
      name: 'Omega V', 
      color: 'Black', 
      colorHex: '#000000', 
      secondaryColor:'Rainbow/White', 
      secondaryColorHex:'rainbow/#ffffff', 
      cssClass: 'omega', 
      iconClass: ['fas', 'crown'], 
      iconAmount: 5, 
      abbreviation: 'O:5', 
      itemIndex: 15,
      description: 'The theoretical last tier. Should ideally be more or less completely unobtainable.'
    },
  ];
}
