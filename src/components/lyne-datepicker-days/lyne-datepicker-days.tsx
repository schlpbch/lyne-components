import {
  Component,
  h,
  Prop
} from '@stencil/core';

import daysHelper from './lyne-datepicker-days.helper';
import { guid } from '../../global/guid';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker-days.default.scss',
    shared: 'styles/lyne-datepicker-days.shared.scss'
  },
  tag: 'lyne-datepicker-days'
})

export class LyneDatepickerDays {

  /**
   * Stringified Array to define the written out weekdays.
   * Format:
   * `["Montag","Dienstag","Mittwoch", ...]`
   * Length: the array must have the same length as the
   * array of the propery daysShort.
   */
  @Prop() public days!: string;

  /**
   * Stringified Array to define the short form of weekdays.
   * Format:
   * `["Mo","Di","Mi", ...]`
   * Length: the array must have the same length as the
   * array of the property days.
   */
  @Prop() public daysShort!: string;

  private _guid: string;

  public componentWillLoad(): void {
    this._guid = guid();
  }

  public render(): JSX.Element {
    const objDays = daysHelper(this.daysShort, this.days);
    let renderWeekdays = false;

    if (objDays) {
      if (objDays.long.length > 0 && objDays.short.length > 0) {
        renderWeekdays = true;
      }
    }

    return (
      <table>
        <thead>
          <tr>
            {renderWeekdays
              ? (
                objDays.short.map((item, index) => (
                  <th id={`${this._guid}${objDays.long[index]}`}>{item}</th>
                ))
              )
              : ''
            }
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
