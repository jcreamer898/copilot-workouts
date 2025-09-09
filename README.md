# 🏋️ Copilot Workouts - Modular Fitness Tracker

A comprehensive, modular workout tracking system designed for organizing, tracking, and sharing fitness routines. Built with structured markdown files for easy version control, searchability, and customization.

## 📁 Repository Structure

```
copilot-workouts/
├── 📅 weekly-logs/          # Individual workout logs organized by week
├── 📋 templates/            # Workout templates and formats
├── 📊 benchmarks/           # Progress tracking and fitness tests
├── 🤝 shared-workouts/      # Partner, group, and community workouts
└── 📖 README.md            # This file
```

## 🚀 Quick Start

1. **Log a new workout:** Copy `templates/workout-template.md` to the appropriate weekly folder
2. **Track progress:** Update your benchmarks monthly in the `benchmarks/` folder
3. **Share workouts:** Add partner/group workouts to `shared-workouts/`
4. **Find workouts:** Use tags and file names to filter and search

## 📅 Weekly Logs Structure

Weekly logs are organized by year and week number:
- `weekly-logs/2024-week-01/`
- `weekly-logs/2024-week-02/`
- etc.

### File Naming Convention
Format: `YYYY-MM-DD-day-workout-type.md`

Examples:
- `2024-01-02-monday-upper-strength.md`
- `2024-01-04-wednesday-lower-power.md`
- `2024-01-06-friday-cardio-recovery.md`

## 🏷️ Tagging System

Each workout includes standardized tags for easy filtering:

### Gear Tags
- `bodyweight` - No equipment needed
- `dumbbells` - Dumbbell exercises
- `barbell` - Barbell exercises  
- `kettlebell` - Kettlebell training
- `resistance-bands` - Band exercises
- `pull-up-bar` - Pull-up/chin-up bar
- `cardio-equipment` - Treadmill, bike, rower, etc.

### Intensity Tags
- `low` - Easy recovery or mobility work
- `moderate` - Steady-state training
- `high` - Challenging but sustainable
- `max-effort` - All-out intensity

### Partner Tags
- `solo` - Individual workout
- `partner` - Two-person workout
- `group` - 3+ people

### Body Part Tags
- `full-body` - Total body workout
- `upper-body` - Arms, chest, shoulders, back
- `lower-body` - Legs, glutes, hips
- `core` - Abdominals and core stability
- `cardio` - Cardiovascular focus

### Cycle Tags
- `strength` - Heavy lifting, low reps
- `conditioning` - High intensity, metabolic
- `mobility` - Flexibility and movement quality
- `recovery` - Active recovery, light movement

## 🔍 How to Filter and Search

### By File System (Manual Browsing)
1. **Weekly Logs:** Browse `weekly-logs/` by date
2. **Benchmarks:** Check `benchmarks/` for progress tracking
3. **Shared Workouts:** Look in `shared-workouts/` for partner/group activities

### By Tags (Search/Grep)
Use command line tools to filter by tags:

```bash
# Find all partner workouts
grep -r "partner" weekly-logs/

# Find all upper body workouts
grep -r "upper-body" weekly-logs/

# Find all kettlebell workouts
grep -r "kettlebell" weekly-logs/

# Find high intensity workouts
grep -r "high.*intensity" weekly-logs/
```

### By Body Part
```bash
# Upper body workouts
find weekly-logs/ -name "*upper*" -type f

# Lower body workouts
find weekly-logs/ -name "*lower*" -type f

# Full body workouts
grep -r "full-body" weekly-logs/
```

### By Cycle/Phase
```bash
# Strength phase workouts
grep -r "strength" weekly-logs/

# Conditioning workouts
grep -r "conditioning" weekly-logs/

# Recovery sessions
grep -r "recovery" weekly-logs/
```

### By Equipment
```bash
# Bodyweight only workouts
grep -r "bodyweight" weekly-logs/ | grep -v "dumbbells\|barbell\|kettlebell"

# Dumbbell workouts
grep -r "dumbbells" weekly-logs/

# No equipment needed
grep -r "bodyweight.*solo" weekly-logs/
```

## 📊 Progress Tracking

### Benchmarks
The `benchmarks/` folder contains standardized tests to track progress:
- **Strength:** 1RM tests, max reps
- **Conditioning:** Time trials, endurance tests
- **Flexibility:** Range of motion assessments

Update benchmarks monthly or quarterly to track improvements.

### Weekly Summaries
Create weekly summary files to track:
- Total workouts completed
- Primary focus areas
- Notable achievements
- Areas for improvement

## 🤝 Sharing Workouts

### Partner Workouts
- Two-person exercises
- Spotting and motivation
- Competitive challenges
- Shared equipment usage

### Group Workouts
- Team building exercises
- Circuit training
- Scalable for different fitness levels
- Community challenges

### Community Sharing
- Export workouts to share with others
- Modify templates for different needs
- Contribute to fitness communities
- Track popular workout formats

## 📝 Workout Template Structure

Each workout follows this standardized format:

```markdown
# Workout Name
**Date:** YYYY-MM-DD
**Duration:** X minutes
**Location:** Gym/Home/Outdoor

## Tags
- **Gear:** equipment used
- **Intensity:** effort level
- **Partner:** solo/partner/group
- **Body Part:** target areas
- **Cycle:** training phase

## Warm-Up
*Duration and exercises*

## Strength Block
*Main lifting/strength work*

## WOD (Workout of the Day)
*Conditioning/metcon work*

## Notes
*Performance, modifications, future plans*
```

## 🔧 Customization

### Adding New Tags
1. Choose descriptive, consistent tag names
2. Update this README with new tag definitions
3. Use consistently across all workouts

### Creating New Templates
1. Copy existing template from `templates/`
2. Modify for specific workout types
3. Save with descriptive filename

### Organizing by Training Cycles
Create folders for specific training phases:
- `weekly-logs/strength-cycle-1/`
- `weekly-logs/conditioning-block/`
- `weekly-logs/competition-prep/`

## 📈 Best Practices

1. **Consistency:** Log every workout with the same format
2. **Detail:** Include weights, reps, times, and subjective notes
3. **Tags:** Use standardized tags for easy filtering
4. **Progression:** Track improvements in benchmarks regularly
5. **Recovery:** Include rest days and recovery sessions
6. **Safety:** Note any injuries or modifications needed

## 🛠️ Tools and Integration

### Recommended Tools
- **Text Editor:** Any markdown editor (VS Code, Obsidian, etc.)
- **Version Control:** Git for tracking changes over time
- **Search:** Command line tools (grep, find) or editor search
- **Mobile:** Any text editor app for quick logging

### Potential Integrations
- Fitness trackers (export data to markdown)
- Calendar apps (workout scheduling)
- Photo storage (progress pictures)
- Social media (sharing achievements)

---

## 📞 Getting Started

1. **Copy the template:** Start with `templates/workout-template.md`
2. **Create your first weekly folder:** `weekly-logs/YYYY-week-XX/`
3. **Log your first workout:** Fill out the template completely
4. **Set up benchmarks:** Test your current fitness levels
5. **Start tracking:** Make it a habit to log every session

**Happy training! 💪**

*Last updated: 2024*
