class EventEmitter {
    constructor() { 
        this.events = new Map();
    }
    subscribe(event, cb) {
        if (this.events.has(event)) {
            this.events.get(event).push(cb)
        }

        if (!this.events.has(event)) {
            this.events.set(event, [cb]);
        }
        
      return {
          unsubscribe: () => {
              let callbacks = this.events.get(event)
              this.events.set(event, callbacks.filter(item => item !== cb));
          }
      };
    }
  
    emit(event, args = []) {
        if (!this.events.has(event)) return [];
        let callbacks = this.events.get(event)
        let results = callbacks.map((cb) => {
            return cb(...args)
        })
        return results;

    }
  }