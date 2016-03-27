# MyScribe

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

MyScribe is a web application inspired by Evernote built using Ruby on Rails
and React.js. MyScribe allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete Notes
- [ ] Organize Notes within Notebooks
- [ ] Create, edit, and delete Notebooks
- [ ] Apply complex styling to Notes while editing
- [ ] Search Notes for text


## Design Docs
* [View Wireframes][./doc/wireframes]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./doc/views.md
[components]: ./doc/components.md
[stores]: ./doc/stores.md
[api-endpoints]: ./doc/api-endpoints.md
[schema]: ./doc/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Notes Model, API, and basic APIUtil (1.0 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ] create `Note` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`NotesController`)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Notes can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `NotesIndex` - Show All Notes
  - [ ] `NoteIndexItem` - Abbreviated Note Show (just title and created_at)
  - [ ] `NoteForm` - Create Note
  - [ ] `NoteDetail` - Show Note (will display Notebook when implemented)
  - [ ] `NoteEditArea` - Edit Note (ProseMirror tooltip when implemented)

### Phase 4: Start Styling (1 day)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] create icons for `Note` and `Notebook`
  - [ ] NoteAdd icon
  - [ ] NoteBookAdd icon
  - [ ] GarbageCan for deleting Note or Notebook
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Notebooks (1.5 days)

**Objective:** Notes belong to Notebooks, and can be viewed by notebook.

- [ ] create `Notebook` model
- build out API, Flux loop, and components for:
  - [ ] Notebook CRUD
  - [ ] adding notes requires a notebook
  - [ ] moving notes to a different notebook
  - [ ] viewing notes by notebook
- Use CSS to style new views

Phase 5 adds organization to the Notes. Notes belong to a Notebook,
which has its own `Index` view.


### Phase 6: Allow Complex Styling in Notes (1.5 day)

**objective:** Enable complex styling of notes.

- [ ] Integrate `ProseMirror` Rich Text Editor component.
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new ProseMirror elements.

### Phase 7: Add Searching for Notes and Notebooks (1 day)

**objective:** Enable search for text within notes and notebooks

- [ ] Create `SearchIndex` Component, API, Flux loop
- [ ] Create Search Icon for Navbar component
- [ ] Allow User to search Notes for text
- [ ] Allow Search of Notebooks in NotebookIndex (RTS textbar)

### Phase 8: Styling Cleanup and Seeding (.5 days)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add transitions and modals

### Bonus Features (TBD)
- [ ] Implement Responsive Web Design ( Flexbox or Media Queries)
- [ ] Tag Notes with multiple Tags
- [ ] Display Notes by Tag
- [ ] Embed images within Notes
- [ ] Set Reminders on Notes
- [ ] Add Shortcuts to Notebooks and Notes
- [ ] Share Notes and Notebooks with other Users (View and/or Edit)
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Chat with other Users
