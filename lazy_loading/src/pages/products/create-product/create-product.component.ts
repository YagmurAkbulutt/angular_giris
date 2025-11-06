import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './create-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateProductComponent {

}
