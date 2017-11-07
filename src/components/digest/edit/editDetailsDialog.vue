<template>
  <v-dialog max-width="500px" persistent v-model="editDialog">
    <v-btn slot="activator"  small>
      <v-icon >edit</v-icon> Text
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Meetup</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="editedTitle"
                required></v-text-field>

              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="editedDescription"
                required></v-text-field>

                <v-text-field
                name="category"
                label="Category"
                id="category"
                v-model="editedCategory"
                required></v-text-field>

                <v-text-field
                name="tag"
                label="Tag"
                id="tag"
                v-model="editedTag"
                required></v-text-field>

                <v-text-field
                name="stageNo"
                label="StageNo"
                id="stageNo"
                v-model="editedStageNo"
                required></v-text-field>

                 <v-text-field
                name="type"
                label="Type"
                id="type"
                v-model="editedType"
                required></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                flat
                class="blue--text darken-1"
                @click="editDialog = false">Close</v-btn>
              <v-btn flat class="blue--text darken-1"
               @click="onSaveChanges">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['meetup'],
    data () {
      return {
        editDialog: false,
        editedTitle: this.meetup.title,
        editedDescription: this.meetup.description,
        editedCategory: this.meetup.category,
        editedTag: this.meetup.tag,
        editedStageNo: this.meetup.stageNo,
        editedType: this.meetup.type
      }
    },
    methods: {
      onSaveChanges () {
        if (this.editedTitle.trim() === '' 
        || this.editedDescription.trim() === ''
        || this.editedCategory.trim() === ''
        || this.editedTag.trim() === ''
        || this.editedStageNo.trim() === ''
        || this.editedType.trim() === ''
        ) {
          return
        }
        this.editDialog = false
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          title: this.editedTitle,
          description: this.editedDescription,
          category: this.editedCategory,
          tag: this.editedTag,
          stageNo: this.editedStageNo,
          type: this.editedType
        })
      }
    }
  }
</script>
