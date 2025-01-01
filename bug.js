```javascript
//tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-color': '#000',
      },
    },
  },
  plugins: [],
}
```
This configuration uses `content` option to specify the source files from which Tailwind CSS will extract the classes. If you have any files which are not covered in the `content` option then it won't work for those files. The second part of the problem is in the way you are using the Tailwind CSS classes. Make sure that the class names that you are using are actually defined in the `theme` section or imported from a plugin. If you are using a custom theme, make sure that you are adding it correctly in the `theme` section and then using them correctly.