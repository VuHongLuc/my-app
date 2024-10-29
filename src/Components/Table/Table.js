import "./Table.css"
function Table() {
  return (
    <table class="student-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Lớp</th>
          <th>SĐT</th>
          <th>Quản lý</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>20</td>
          <td>CT101</td>
          <td>0963222393</td>
          <td className="btn-table">
            <button type="button" className="btn btn-management btn-edit">Edit</button>
            <button type="button" className="btn btn-management btn-delete">Delete</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Trần Thị B</td>
          <td>21</td>
          <td>CT102</td>
          <td>0963222393</td>
          <td className="btn-table">
            <button type="button" className="btn btn-management btn-edit">Edit</button>
            <button type="button" className="btn btn-management btn-delete">Delete</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Lê Văn C</td>
          <td>22</td>
          <td>CT103</td>
          <td>0963222393</td>
          <td className="btn-table">
            <button type="button" className="btn btn-management btn-edit">Edit</button>
            <button type="button" className="btn btn-management btn-delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
