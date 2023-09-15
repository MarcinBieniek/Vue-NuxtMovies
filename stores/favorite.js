import { defineStore, acceptHMRUpdate } from "pinia";

export const useFavorite = defineStore("favorite", {

  state: () => {
    return {
      items: []
    }
  },

  getters: {},

  actions: {
    addItem(item) {

      // working code
      //this.items.push(item)
      //console.log(this.items)

      const isItemInArray = this.items.some((existingItem) => existingItem.imdbID === item.imdbID);

      if (isItemInArray) {
        // Jeśli element istnieje, usuń go
        this.items = this.items.filter((existingItem) => existingItem.imdbID !== item.imdbID);
      } else {
        // Jeśli element nie istnieje, dodaj go
        this.items.push({ ...item });
      }

    }
  }
})