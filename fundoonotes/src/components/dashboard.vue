<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="Bar">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>


 <span class="FundooNotes_img" >
 <img  src="../assets/googleKeep.png" >
</span>
 <v-spacer> </v-spacer>

 
<span class="FundooNotes_img" id="list"><img  src="../assets/list.png" ></span>

<span class="FundooNotes_img" id="settings"><img  src="../assets/settings.png" ></span>

<span class="FundooNotes_img" id="allApps"><img  src="../assets/allApps.png" ></span>

<div class="separator">
      <md-avatar class="md-avatar-icon">A</md-avatar>
    </div>
  
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
         </md-app-drawer>

      <md-app-content>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <pre>Lorem ipsum dolor sit 
        amet, consectetur adipisicing 
        elit. Error quibusdam,
         non molestias et! 
         Earum magnam,
          similique, 
          quo 
          recusandae 
          placeat
           dicta 
           asperiores
            modi 
            sint 
            ea 
            repudiandae
             maxime?
              Quae 
              non 
              explicabo,
               neque.</pre>
        
        
        
        
        
        
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
      </md-app-content>
   
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
 border: #070808;
    padding-top: 0px;
 
  }
.Bar{
 max-height: 400px;
padding-top: 0px;
 margin-top: 0%;
box-shadow: none;

}
.md-avatar-icon{
    padding-left:8px;
   padding-right:8px;
}
.FundooNotes_img{
  width:46px;
  height:46px;
   padding-left:10px;
   padding-right:10px;
}

#settings{
   width:42px;
  height:42px;
  padding-top: 11px;
scroll-margin-left: 200px;

}

#list{
   width:42px;
  height:42px;
  padding-top: 11px;
  
   padding-left: 100px;

}

#allApps{
   width:40px;
  height:40px;
  padding-top: 10px;
   padding-left: 10px;


}
   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false,
  })
};
</script>