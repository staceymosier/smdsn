
const tags = ['JavaScript', 'SCSS', 'Responsive Web Design', 'SVG', 'PHP', 'Content Management', 'User Experience', 'Project Management', 'Integration',
 'Drupal 8', 'Data Management', 'MySQL', 'User Workflows', 'SEO', 'Accessibility', 'User Training', 'git & gitlab', 'npm/node', 'yarn', 'parcel', 'aws', 's3',
 'VSCode', 'Sublime Text', 'ESLint', 'Gulp', 'PHP Code Sniifer']

const tagsParent = document.querySelector('#tags');
if (tagsParent) {
  tags.forEach(function (tag) {
    let span = document.createElement('span');
    span.className = 'tag';
    span.innerHTML = tag;
    tagsParent.appendChild(span);
  });
};