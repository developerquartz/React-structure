import React from "react";
import {
  Table,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/left-arrow-pointed.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-arrow-pointed.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Profilehistory = () => {
  return (
    <section className="profilehistory_sec">
      <Form>
        <div className="history_fillter d-flex align-items-center justify-content-end gap-3 mb-4">
          <div className="common_inner">
            <FormGroup className="position-relative">
              <span className="search_icon">
                <SearchIcon />
              </span>
              <Input
                type="search"
                name="search"
                id="filltersearch"
                placeholder="Search by Airport code"
              />
            </FormGroup>
          </div>

          <div className="common_inner">
            <p>Service:</p>
            <UncontrolledDropdown>
              <DropdownToggle caret>VIP lounge services</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>VIP lounge services</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <div className="common_inner">
            <p>Sort by:</p>
            <UncontrolledDropdown>
              <DropdownToggle caret>Date</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Date</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </Form>

      <div className="history_table">
        <Table responsive>
          <thead>
            <tr>
              <th>Airport</th>
              <th>Travellers</th>
              <th>Flight Date & time</th>
              <th>Total amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cairo International Airport, CAI</td>
              <td>2x Adults, 1x Child, 1x Infant</td>
              <td>12:00 Wed, 19 Jul 23</td>
              <td>@75.00 USD</td>
            </tr>

            <tr>
              <td>Cairo International Airport, CAI</td>
              <td>2x Adults, 1x Child, 1x Infant</td>
              <td>12:00 Wed, 19 Jul 23</td>
              <td>@75.00 USD</td>
            </tr>

            <tr>
              <td>Cairo International Airport, CAI</td>
              <td>2x Adults, 1x Child, 1x Infant</td>
              <td>12:00 Wed, 19 Jul 23</td>
              <td>@75.00 USD</td>
            </tr>

            <tr>
              <td>Cairo International Airport, CAI</td>
              <td>2x Adults, 1x Child, 1x Infant</td>
              <td>12:00 Wed, 19 Jul 23</td>
              <td>@75.00 USD</td>
            </tr>
          </tbody>
        </Table>

        <div className="button_prev_next d-flex align-items-center justify-content-end gap-3 mt-5">
          <Button className="prevbtn">
            <LeftArrowIcon /> Previous
          </Button>
          <Button className="nextbtn">
            Next <RightArrowIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profilehistory;
