function skillsMember() {
  var member = {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node', 'CSS'],
    age: 25,
    sayName: function() {
      console.log(this.name);
    },
    saySkills: function() {
      this.skills.forEach(function(skill) {
        console.log(skill);
      });
    }
  };

  return member;
}