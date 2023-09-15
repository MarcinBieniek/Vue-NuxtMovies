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
      const isItemInArray = this.items.some((existingItem) => existingItem.imdbID === item.imdbID);
      if (isItemInArray) {
        this.items = this.items.filter((existingItem) => existingItem.imdbID !== item.imdbID);
      } else {
        this.items.push({ ...item });
      }
    },
    deleteItem(imdbID) {
      this.items = this.items.filter((item) => item.imdbID !== imdbID);
    },
  }
})