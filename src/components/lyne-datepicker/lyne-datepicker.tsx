import {
  Component,
  h,
  Prop
} from '@stencil/core';

import { InterfaceLyneDatepickerAttributes } from './lyne-datepicker.custom.d';
import chevronIconRight from 'lyne-icons/dist/icons/chevron-small-right-small.svg';
import chevronIconLeft from 'lyne-icons/dist/icons/chevron-small-left-small.svg';

/**
 * @slot unnamed - Use this to document a slot.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker.default.scss',
    shared: 'styles/lyne-datepicker.shared.scss'
  },
  tag: 'lyne-datepicker'
})

export class LyneDatepicker {

  /** Documentation for someProp */
  @Prop() public someProp?: InterfaceLyneDatepickerAttributes['someInterface'];

  public render(): JSX.Element {
    return (
      <div class='datepicker'>
        <div class='datepicker__header'>
          <div class='datepicker__header-month'>
            <lyne-button
              class='datepicker__header-month-prev'
              variant='secondary'
              size='small'
              label=''
              icon={true}
              iconDescription='Zum vorherigen Monat wechseln'
              innerHTML={chevronIconLeft}
            ></lyne-button>
            <div class='datepicker__header-month-current'>
              <span>December 2021</span>
            </div>
            <lyne-button
              class='datepicker__header-month-next'
              variant='secondary'
              size='small'
              label=''
              icon={true}
              iconDescription='Zum nächsten Monat wechseln'
              innerHTML={chevronIconRight}
            ></lyne-button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Mo</th>
              <th>Di</th>
              <th>Mi</th>
              <th>Do</th>
              <th>Fr</th>
              <th>Sa</th>
              <th>So</th>
            </tr>
          </thead>
          <tbody>
            <tr role='row'>
              <td class='empty'>&nbsp;</td>
              <td class='empty'>&nbsp;</td>
              <td role='gridcell'><span>1</span></td>
              <td role='gridcell'><span>2</span></td>
              <td role='gridcell'><span>3</span></td>
              <td role='gridcell'><span>4</span></td>
              <td role='gridcell'><span>5</span></td>
            </tr>
            <tr role='row'>
              <td role='gridcell'><span>6</span></td>
              <td role='gridcell'><span>7</span></td>
              <td role='gridcell'><span>8</span></td>
              <td role='gridcell'><span>9</span></td>
              <td role='gridcell'><span>10</span></td>
              <td role='gridcell'><span>11</span></td>
              <td role='gridcell'><span>12</span></td>
            </tr>
            <tr role='row'>
              <td role='gridcell'><span>13</span></td>
              <td role='gridcell'><span>14</span></td>
              <td role='gridcell'><span>15</span></td>
              <td role='gridcell'><span>16</span></td>
              <td role='gridcell'><span>17</span></td>
              <td role='gridcell'><span>18</span></td>
              <td role='gridcell'><span>19</span></td>
            </tr>
            <tr role='row'>
              <td role='gridcell'><span>20</span></td>
              <td role='gridcell'><span>21</span></td>
              <td role='gridcell'><span>22</span></td>
              <td role='gridcell'><span>23</span></td>
              <td role='gridcell'><span>24</span></td>
              <td role='gridcell'><span>25</span></td>
              <td role='gridcell'><span>26</span></td>
            </tr>
            <tr role='row'>
              <td role='gridcell'><span>27</span></td>
              <td role='gridcell'><span>28</span></td>
              <td role='gridcell'><span>29</span></td>
              <td role='gridcell'><span>30</span></td>
              <td role='gridcell'><span>31</span></td>
              <td class='empty'>&nbsp;</td>
              <td class='empty'>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
