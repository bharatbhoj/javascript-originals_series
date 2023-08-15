// singleton

// object literals

Object.create   // constructor methods 

const sym= Symbol("my_keys1");

const user ={ name: "bharat",  // actually yeh naa aise dikhta hai  "name"="bharat" in real case;
              "full Name":"bharat bhoj",
              age:22,
             location:"delhi",
             email:"bhojbharat07@gmail.com",
             isLoggedIn:false,
            LastLofinDays: ["monday","friday"],
            [sym]: "bharat"
        }
        console.log(user["full Name"])    
        console.log(["location"])   
        
        user.email="bhojbharat07@yahoo.com"
        console.log(user.email)
        Object.freeze(user.email)

        user.email="bhojbharat@test.com.com"
        console.log(user)


      user.func= function(){
        console.log(`hello my world ${this.name}`);
      }

      console.log(user.func())