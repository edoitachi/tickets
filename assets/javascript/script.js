// Functions
function toggleClass(element, className) {
	if (element.classList.contains(className)) {
		element.classList.remove(className)
	} else {
		element.classList.add(className)
	}
}

// Get the menu toggle button
const menuToggle = document.querySelector('.menu-toggle')

// Get the menu and overlay
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', function () {
	// Toggle the "open" class on the menu toggle button
	// menuToggle.classList.toggle('open')

	// Toggle the "open" class on the menu
	menu.classList.toggle('open')
	overlay.classList.toggle('visible')

	if (menu.classList.contains('open')) {
		// Add click event listener to overlay
		overlay.addEventListener('click', function () {
			menu.classList.remove('open')
			overlay.classList.remove('visible')
		})
	} else {
		// Remove click event listener from overlay
		overlay.removeEventListener('click', function () {})
	}
	document.documentElement.classList.toggle('disable-scroll')
})

const btnDashboard = document.querySelector('.btn-dashboard')
const dashboardMenuOverlay = document.querySelector('.dashboard-menu-overlay')
const dashboardMenu = document.querySelector('.dashboard-menu')

btnDashboard.addEventListener('click', function () {
	btnDashboard.classList.toggle('open')
	dashboardMenu.classList.toggle('open')
	dashboardMenuOverlay.classList.toggle('visible')
	document.documentElement.classList.toggle('disable-scroll')
})

const dropdown = document.querySelector('.dropdown')
const dropdownMenu = dropdown.querySelector('.dropdown-menu')
const dropdownToggle = dropdown.querySelector('.nav-link')

dropdownToggle.addEventListener('click', function (event) {
	if (dropdownMenu.classList.contains('open')) {
		dropdownMenu.classList.remove('open')
	} else {
		dropdownMenu.classList.add('open')
	}
})
