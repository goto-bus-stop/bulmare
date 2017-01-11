import { MenuLabel, MenuList, MenuItem } from 'bulmare'

export default () => (
  <aside className="menu">
    <MenuLabel>General</MenuLabel>
    <MenuList>
      <MenuItem><a>Dashboard</a></MenuItem>
      <MenuItem><a>Customers</a></MenuItem>
    </MenuList>
    <MenuLabel>Administration</MenuLabel>
    <MenuList>
      <MenuItem><a>Team Settings</a></MenuItem>
      <MenuItem>
        <a className="is-active">Manage Your Team</a>
        <MenuList>
          <MenuItem><a>Members</a></MenuItem>
          <MenuItem><a>Plugins</a></MenuItem>
          <MenuItem><a>Add a member</a></MenuItem>
        </MenuList>
      </MenuItem>
      <MenuItem><a>Invitations</a></MenuItem>
      <MenuItem><a>Cloud Storage Environment Settings</a></MenuItem>
      <MenuItem><a>Authentication</a></MenuItem>
    </MenuList>
    <MenuLabel>Transactions</MenuLabel>
    <MenuList>
      <MenuItem><a>Payments</a></MenuItem>
      <MenuItem><a>Transfers</a></MenuItem>
      <MenuItem><a>Balance</a></MenuItem>
    </MenuList>
  </aside>
)
