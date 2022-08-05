# WOOF Site

This is the main site for the [Wisconsin Organization Of Furries \(WOOF\)](https://discord.com/invite/vYE5yBv) student organization in Madison, Wisconsin.

## Building the Site

Make sure you have a recent version of `node` installed. `v16.1.0` is known to work.
```bash
git clone https://github.com/woofuw-dev/WOOF-site
cd WOOF-site
npm install
node index.js
```
The site files should appear in ./generated/

## Viewing the site

The site may not display correctly due to the same origin policy. To get around this you will need to launch a local server. The easiest way is with `Python`.

With `Python` installed, do:
```bash
cd [path to folder]/WOOF-site/generated/
python3 -m http.server
```
Or if that doesn't work,
```bash
cd [path to folder]/WOOF-site/generated/
python -m http.server
```
Replace `[path to folder]` with your own path to the WOOF-site folder.

The server should now be loaded on port 8000 by default. You can now view the site by going to [localhost:8000](http://localhost:8000) in your browser. If the site is on a different port, the command line you excecuted the command in should display the correct port.

## Contributing

Feel free to contribute to this project if you have improvements in mind. Any contributions will be appreciated.

### Steps:
- Create a new branch
- Make your commits and push
- Open a pull request & request a review from @by77er

## Tasks
- [x] Use a templating engine
- [x] Add site content
- [ ] Improve Google Calendar visuals by using its API instead of an `iframe`
- [ ] Integrate with WOOF Discord bot?
