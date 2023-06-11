/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snaps = new Map();
    this.values = new Map();
    this.snap_id = 0;

};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.values.set(index, val);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snaps.set(this.snap_id, new Map(this.values));
    this.values = new Map();
    return this.snap_id++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
    let found = false;
    let cache;
    for (let i = snap_id; i >= 0; i--) {
        cache = this.snaps.get(i);


        if (!cache.has(index)) {
            continue;
        } else {
            found = true;        
            break;
        }

    }

    if (found) {
        return cache.get(index);
    }

    return 0;
    
};