import {
  Component,
  h,
  Prop
} from '@stencil/core';

import { InterfaceLyneDatepickerDaysAttributes } from './lyne-datepicker-days.custom.d';

/**
 * @slot unnamed - Use this to document a slot.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker-days.default.scss',
    shared: 'styles/lyne-datepicker-days.shared.scss'
  },
  tag: 'lyne-datepicker-days'
})

export class LyneDatepickerDays {

  /** Documentation for someProp */
  @Prop() public someProp?: InterfaceLyneDatepickerDaysAttributes['someInterface'];

  public render(): JSX.Element {
    return (
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
            <td class='datepicker__day--empty'>&nbsp;</td>
            <td class='datepicker__day--empty'>&nbsp;</td>
            <td class='datepicker__day--past' role='gridcell'><span>1</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>2</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>3</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>4</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>5</span></td>
          </tr>
          <tr role='row'>
            <td class='datepicker__day--past' role='gridcell'><span>6</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>7</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>8</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>9</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>10</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>11</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>12</span></td>
          </tr>
          <tr role='row'>
            <td class='datepicker__day--past' role='gridcell'><span>13</span></td>
            <td class='datepicker__day--past datepicker__day--selected' role='gridcell'><span>14</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>15</span></td>
            <td class='datepicker__day--past' role='gridcell'><span>16</span></td>
            <td class='datepicker__day--today' role='gridcell'><span>17</span></td>
            <td role='gridcell'><span>18</span></td>
            <td role='gridcell'><span>19</span></td>
          </tr>
          <tr role='row'>
            <td role='gridcell'><span>20</span></td>
            <td role='gridcell'><span>21</span></td>
            <td role='gridcell'><span>22</span></td>
            <td class='datepicker__day--disabled' role='gridcell'><span>23</span></td>
            <td class='datepicker__day--disabled' role='gridcell'><span>24</span></td>
            <td class='datepicker__day--disabled' role='gridcell'><span>25</span></td>
            <td role='gridcell'><span>26</span></td>
          </tr>
          <tr role='row'>
            <td role='gridcell'><span>27</span></td>
            <td class='datepicker__day--disabled' role='gridcell'><span>28</span></td>
            <td role='gridcell'><span>29</span></td>
            <td role='gridcell'><span>30</span></td>
            <td role='gridcell'><span>31</span></td>
            <td class='datepicker__day--empty'>&nbsp;</td>
            <td class='datepicker__day--empty'>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
