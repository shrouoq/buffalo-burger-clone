/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors : {
        Whitee : '#fff',
        orangee: 'rgb(255 95 0)',
        backgroundColor : 'rgb(28 28 27)',
        pColor : 'rgb(164 164 164)',
        lightGray : 'hsla(0, 0%, 85%, .2)',
        babyBlue : 'rgb(241 245 249)'
      },
      borderRadius : {
        sm : '10px'
      },
      fontSize : {
        btn : '15px'
      },
      screens : {
        'max-xs' : {
          max : '550px'
        },
        'max-sm' : {
          max : '767px'
        },
        'max-md' : {
          max : '991px'
        },
        'max-lg' : {
          max : '1023px'
        }
      },
      
    },
    
  },
  plugins: [],
}

