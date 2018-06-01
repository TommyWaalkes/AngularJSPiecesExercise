"use strict";
{
   let fam={
    controller:  function familyController(){
        const vm = this;

        //Grab family members from your service here
        vm.familyMembers = [];

        vm.GetFamilyMembers=()=>{
            return vm.familyMembers;
        }
    },

    //How do I import the html here?
    templateUrl:``

   }
}