## React Router

**Setup 'React Router Dom**
<br />
npm install react-router-dom localforage match-sorter sort-by

**Adding a Router**
<br />
createBrowserRouter, RouterProvider

**Handling Not Found Errors**
<br />
when the user navigates to routes that don't exist - useRouteError

**Nested Routes**
<br />
children route, <Outlet />

**Client Side Routing**
<br />
Client side routing allows our app to update the URL without requesting another document from the server. <Link />

**Loading Data**<br />
URL segments, layouts, and data are more often than not coupled together. <br />
React Router has data conventions to get data into your route components easily.<br />

**Creating Contacts**<br />
exporting 'action' in root route, wiring it up to route config, 'Form'

**Updating Data**<br />
The edit route we just created already renders a form. <br />
All we need to do to update the record is wire up an action to the route. <br />
The form will post to the action and the data will be automatically revalidated. <br />


****

- Updaing Contacts
- Mutation Discussion
- Redirecting New Records
- Active Link Styling and Global Pending UI

