import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import { createContact, getContacts } from "../contacts";

// create and export a loader function
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

// create and export action
export async function action() {
  const contact = await createContact();
  return { contact };
}

export default function Root() {
  // access the data
  const { contacts } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>

        <div>
          <form id="search-form" role="search">
            <input
              type="search"
              id="q"
              name="q"
              placeholder="Search"
              aria-label="Search contacts"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>

          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
