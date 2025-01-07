function createIconItems(sectionId, className) {
	const grid = document.getElementById(sectionId);
	icons.forEach(icon => {
		const item = document.createElement('div');
		item.className = 'icon-item';
		item.onclick = () => copyCode(icon.name, className);
		item.innerHTML = `
			<span class="${className}">${icon.name}</span>
			<div class="icon-name">${icon.name}</div>
			<div class="icon-keywords">${icon.keywords}</div>
		`;
		grid.appendChild(item);
	});
}

function copyCode(iconName, className) {
	const code = `<span class="${className}">${iconName}</span>`;
	navigator.clipboard.writeText(code)
		.then(() => showToast('已成功复制标签，请直接粘贴！'))
		.catch(() => showToast('复制失败！'));
}

function showToast(message) {
	const toast = document.getElementById('toast');
	toast.textContent = message;
	toast.classList.add('show');
	setTimeout(() => {
		toast.classList.remove('show');
	}, 2000);
}

function filterIcons() {
	const searchValue = document.getElementById('search').value.toLowerCase();
	document.querySelectorAll('.icon-item').forEach(icon => {
		const name = icon.querySelector('.icon-name').textContent.toLowerCase();
		const keywords = icon.querySelector('.icon-keywords').textContent.toLowerCase();
		icon.style.display = (name.includes(searchValue) || keywords.includes(searchValue)) ? 'block' : 'none';
	});
}

createIconItems('icon-grid-filled', 'material-icons');
createIconItems('icon-grid-outlined', 'material-icons-outlined');
createIconItems('icon-grid-round', 'material-icons-round');
createIconItems('icon-grid-sharp', 'material-icons-sharp');
createIconItems('icon-grid-two-tone', 'material-icons-two-tone');