import { Component } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-lists',
  templateUrl: './package-lists.component.html',
  styleUrls: ['./package-lists.component.css']
})
export class PackageListsComponent {
packages: Package [] = [
  new Package('Churrasco', 'Churraco de fraudinha','https://as2.ftcdn.net/v2/jpg/04/26/44/83/1000_F_426448379_eJRZjHMbhKJKxtpbj76rV1wTIljfAHCe.jpg'),
  new Package('Churrasco', 'Churraco de fraudinha','https://as2.ftcdn.net/v2/jpg/04/26/44/83/1000_F_426448379_eJRZjHMbhKJKxtpbj76rV1wTIljfAHCe.jpg')
];

}
