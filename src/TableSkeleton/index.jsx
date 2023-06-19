import './style.css';

function TableSkeleton(props) {
  return (
    <table class="tg">
      <tr>
        <th class="tg-cly1">
          <div class="line"></div>
        </th>
        <th class="tg-cly1">
          <div class="line"></div>
        </th>
        <th class="tg-cly1">
          <div class="line"></div>
        </th>
        <th class="tg-cly1">
          <div class="line"></div>
        </th>
      </tr>
      <tr>
        <td class="tg-cly1">
          <div class="line"></div>
        </td>
        <td class="tg-cly1">
          <div class="line"></div>
        </td>
        <td class="tg-cly1">
          <div class="line"></div>
        </td>
        <td class="tg-cly1">
          <div class="line"></div>
        </td>
      </tr>
      <tr>
        <td class="tg-cly1">
          <div class="line"></div>
        </td>
        <td class="tg-cly1">
          <div class="line"></div>
        </td>
        <td class="tg-cly1">
          <div class="line"></div>
        </td>
        <td class="tg-cly1">
          <div class="line"></div>
        </td>
      </tr>
    </table>
  );
}

export default TableSkeleton;
